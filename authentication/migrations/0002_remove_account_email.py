# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-21 00:11
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='email',
        ),
    ]
