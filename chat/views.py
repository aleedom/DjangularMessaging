from rest_framework import permissions, generics
from rest_framework.response import Response

from chat.models import Conversation
from chat.permissions import ConversationUserOrAdmin
from chat.serializers import ConversationSerializer


class ConversationListView(generics.ListCreateAPIView):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        # really bad hack for now not sure how to do the lookup
        queryset = Conversation.objects.all()
        for conv in queryset:
            if request.user not in conv.users.all():
                queryset.remove(conv)

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


class ConverstaionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
    permission_classes = (permissions.IsAuthenticated, ConversationUserOrAdmin)
