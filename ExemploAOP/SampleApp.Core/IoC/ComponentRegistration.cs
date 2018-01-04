using Castle.Core;
using Castle.MicroKernel;
using Castle.MicroKernel.Registration;
using SampleApp.Core.Interceptors;
using SampleApp.Core.Types;
using SampleApp.Core.Interfaces;

namespace SampleApp.Core.IoC
{
    public class ComponentRegistration : IRegistration
    {
        public void Register(IKernelInternal kernel)
        {
            kernel.Register(
                Component.For<LoggingInterceptor>()
                    .ImplementedBy<LoggingInterceptor>());

            kernel.Register(
                Component.For<IClienteRepository>()
                         .ImplementedBy<ClienteRepository>()
                         .Interceptors(InterceptorReference.ForType<LoggingInterceptor>()).Anywhere);

            
        }
    }
}
