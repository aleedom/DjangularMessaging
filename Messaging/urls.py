from django.conf.urls import url, include

from rest_framework import routers

from authentication.views import AccountViewSet

from Messaging.views import IndexView

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)


urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^.*$', IndexView.as_view(), name='index'),
]
