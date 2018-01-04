
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CursoWebApi.Antifraude;

namespace CursoWebApi.Controllers
{
    public class AntifraudeController : ApiController
    {
        private IAntifraude Antifraude;

        public AntifraudeController(IAntifraude antifraude)
        {
           Antifraude = antifraude;
        }

        /// <summary>
        /// Posta as informações de cartão e valor da transação 
        /// </summary>
        /// <param name="numeroCartao">Numero do cartão</param>
        /// <param name="valorTransacao">Valor da transação</param>
        /// <returns></returns>
        public bool Post([FromBody]string numeroCartao, double valorTransacao)
        {
            Validar(numeroCartao, valorTransacao);

            return Antifraude.ValidarTransacao(numeroCartao, valorTransacao);
        }

        private void Validar(string numeroCartao, double valorTransacao)
        {
            if(numeroCartao.Contains("-"))
            {
                throw new ArgumentException();
            }
        }

        // GET api/values/5
        public bool Get([FromBody]string numeroCartao, double valorTransacao)
        {
            return Antifraude.ValidarTransacao(numeroCartao, valorTransacao);
        }

        // PUT api/values/5
        public bool Put([FromBody]string numeroCartao, double valorTransacao)
        {
            return Antifraude.ValidarTransacao(numeroCartao, valorTransacao);
        }

        // DELETE api/values/5
        public bool Delete([FromBody]string numeroCartao, double valorTransacao)
        {
            return Antifraude.ValidarTransacao(numeroCartao, valorTransacao);
        }

    }
}