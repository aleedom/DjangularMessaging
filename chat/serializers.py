from rest_framework import serializers

from authentication.serializers import AccountSerializer
from chat.models import Message, Conversation


class MessageSerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True, required=False)

    class Meta:
        model = Message
        fields = ('text', 'author', 'created_at')
        read_only_fields = ('created_at')


class ConversationSerializer(serializers.ModelSerializer):
    users = AccountSerializer(many=True)
    messages = MessageSerializer(many=True)

    class Meta:
        model = Conversation
        fields = ('name', 'users', 'owner')
