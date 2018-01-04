using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoWebApi.Antifraude
{
    public interface IAntifraude
    {
        bool ValidarTransacao(string numeroCartao, double valorTransacao);
    }
}
