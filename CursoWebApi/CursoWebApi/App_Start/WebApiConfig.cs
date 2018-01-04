using CursoWebApi.Antifraude;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Unity;
using Unity.Lifetime;

namespace CursoWebApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var container = ConfigureContainer();

            config.DependencyResolver = new DependencyResolver(container);

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }

        private static UnityContainer ConfigureContainer()
        {
            var container = new UnityContainer();

            container.RegisterType<IAntifraude, AntifraudeSimilit>(new ContainerControlledLifetimeManager());

            return container;
        }
    }
}
