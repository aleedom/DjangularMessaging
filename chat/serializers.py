from rest_framework import serializers

from authentication.models import Account

from chat.models import Message, Conversation


class MessageSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True, required=False)

    class Meta:
        model = Message
        fields = ('text', 'author', 'created_at')
        read_only_fields = ('created_at')


class ConversationSerializer(serializers.ModelSerializer):
    users = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all(), required=False, many=True)
    owner = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all(), required=False)
    messages = MessageSerializer(required=False, many=True)

    class Meta:
        model = Conversation
        fields = ('name', 'owner', 'users', 'messages')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ConversationSerializer, self).get_validation_exclusions()

        return exclusions + ['owner']
