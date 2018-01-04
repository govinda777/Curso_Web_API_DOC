using Castle.DynamicProxy;
using System;

namespace SampleApp.Core.Interceptors
{
    public class LoggingInterceptor : IInterceptor
    {
        public void Intercept(IInvocation invocation)
        {
            var methodName = invocation.Method.Name;
            try
            {
                Console.WriteLine(string.Format("Interceptando Metodo:{0}, Valor dos argumentos: {1}", methodName, string.Join(",", invocation.Arguments)));
                invocation.Proceed();
                Console.WriteLine(string.Format("Sucesso na execução do metodo:{0}", methodName));
            }
            catch (Exception e)
            {
                Console.WriteLine(string.Format("# Erro => Method:{0}, Exception:{1}", methodName, e.Message));
                throw;
            }
        }
    }
}
