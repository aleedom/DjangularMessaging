from rest_framework import serializers

from chat.models import Message, Conversation


class MessageSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True, required=False)

    class Meta:
        model = Message
        fields = ('text', 'author', 'created_at')
        read_only_fields = ('created_at')


class ConversationSerializer(serializers.ModelSerializer):
    users = serializers.StringRelatedField(many=True)
    owner = serializers.StringRelatedField()
    messages = MessageSerializer(many=True)

    class Meta:
        model = Conversation
        fields = ('name', 'owner', 'users', 'messages')
