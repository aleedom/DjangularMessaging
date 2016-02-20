from rest_framework import permissions


class ConversationUserOrAdmin(permissions.BasePermission):
    def has_object_permissions(self, request, view, conversation):
        if request.user:
            if request.user == conversation.admin:
                user_status = "owner"
            elif request.user in conversation.users:
                user_status = "user"
            else:
                user_status = None

        if request.method == permissions.SAFE_METHODS:
            # safe methods require that the user is in conversation user list
            return user_status == "user" or user_status == "owner"
        else:
            # only the owner can change or delete a conversation
            return user_status == "owner"


class isConversationOwner(permissions.BasePermission):
    def has_object_permissions(self, request, view, conversation):
        if request.user:
            print(request.user, conversation.owner)
            return request.user == conversation.owner
