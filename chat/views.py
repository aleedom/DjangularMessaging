from django.core.exceptions import ObjectDoesNotExist

from rest_framework import permissions, generics, status
from rest_framework.response import Response

from authentication.models import Account

from chat.models import Conversation
from chat.permissions import ConversationUserOrAdmin
from chat.serializers import ConversationSerializer


class ConversationListView(generics.ListCreateAPIView):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        # really bad hack for now not sure how to do the lookup

        user = Account.objects.get(username=request.user)
        queryset = user.conversation_set.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        data = {
            'name': request.data['name'],
            'owner': Account.objects.get(username=request.user).id
        }
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            print(serializer.validated_data)
            conv = Conversation.objects.create(
                        name=serializer.validated_data['name'],
                        owner=serializer.validated_data['owner']
                    )
            bad_users = []
            for user in request.data['users']:
                try:
                    conv.users.add(Account.objects.get(username=user))
                except ObjectDoesNotExist:
                    bad_users.append(user)
            return Response({
                'name': conv.name,
                'owner': conv.owner.username,
                'users': [request.data['users']],
                'bad_users': bad_users
            }, status=status.HTTP_201_CREATED)
        else:
            print("IN CREATE: invalid", request.data, serializer.errors)
            return Response({
                'status': 'Bad request',
                'message': 'Account could not be created with received data.'
            }, status=status.HTTP_400_BAD_REQUEST)


class ConverstaionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
    permission_classes = (permissions.IsAuthenticated, ConversationUserOrAdmin)
