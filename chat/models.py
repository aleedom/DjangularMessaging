"""
    User creates channel:
        At creation creator specifies initial users and initial admins (admins is a subset of users)
            admins can add more admins
            admins can add more users

            can add/remove other users
                maybe delete channel when admin removes self or make that illegal
        Channel users
            send messages
            leave channel
"""

from django.db import models
from authentication.models import Account


class Conversation(models.model):
    name = models.CharField(unique=True, max_length=100)
    users = models.ManyToManyField('Account')
    owner = models.ForeignKey(
            'Account',
            on_delete=models.CASCADE,
            blank=False
            )

    def __str__(self):
        return self.name


class Message(models.model):
    author = models.ForeignKey(Account)
    text = models.CharField(max_length=500)
    Conversation = models.ForeignKey(Conversation)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{} at {}".format(self.author, self.created_at)
