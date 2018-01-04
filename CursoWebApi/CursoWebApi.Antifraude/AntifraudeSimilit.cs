using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoWebApi.Antifraude
{
    public class AntifraudeSimilit : IAntifraude
    {
        public bool ValidarTransacao(string numeroCartao, double valorTransacao)
        {
            Random gen = new Random();
            int prob = gen.Next(100);
            return prob <= 80;
        }
    }
}
