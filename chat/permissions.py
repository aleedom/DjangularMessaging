from rest_framework import permissions


class inConversation(permissions.BasePermission):
    def has_object_permissions(self, request, view, conversation):
        if request.user:
            print("Users in Conversation: {}".format(conversation.users))
            return request.user in conversation.users


class isConversationOwner(permissions.BasePermission):
    def has_object_permissions(self, request, view, conversation):
        if request.user:
            print(request.user, conversation.owner)
            return request.user == conversation.owner
