from django.conf.urls import url, include
from django.contrib import admin

from Messaging.views import IndexView


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^auth/', include('djoser.urls.authtoken')),
    url(r'', IndexView.as_view(), name='index')
]
