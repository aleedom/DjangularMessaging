from rest_framework import permissions, generics
from rest_framework.response import Response

from chat.models import Conversation
from chat.permissions import ConversationUserOrAdmin
from chat.serializers import ConversationSerializer


class ConversationListView(generics.ListCreateAPIView):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request, account_username=None):
        queryset = Conversation.objects.filter(users__icontains=account_username)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


class ConverstaionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
    permission_classes = (permissions.IsAuthenticated, ConversationUserOrAdmin)
