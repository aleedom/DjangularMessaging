from django.shortcuts import render


def spa_index(request):
    return render(request, 'index.html')
