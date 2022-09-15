from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
]

# Base template 

urlpatterns += [
    path('', TemplateView.as_view(template_name='base_templates/index.html')),
]
