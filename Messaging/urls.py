from django.conf.urls import url, include

from rest_framework import routers

from authentication.views import LoginView, LogoutView, AccountViewSet

from Messaging.views import IndexView

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)


urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'api/auth/login/$', LoginView.as_view(), name='login'),
    url(r'api/auth/logout/$', LogoutView.as_view(), name='logout'),
    url(r'^.*$', IndexView.as_view(), name='index'),
]
