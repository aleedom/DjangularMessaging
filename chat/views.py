from rest_framework import permissions, viewsets
from rest_framework.response import Response

from chat.models import Conversation
from chat.permissions import inConversation
from chat.serializers import ConversationSerializer, MessageSerializer


class ConversationViewSet(viewsets.ViewSet):
    serializer_class = ConversationSerializer
    permission_classes = (permissions.IsAuthenticated, inConversation)

    def list(self, request, account_username=None):
        queryset = Conversation.objects.filter(users__icontains=account_username)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Conversation.objects.get(pk == pk)
        serializer = MessageSerializer(queryset)
        return Response(serializer.data)
