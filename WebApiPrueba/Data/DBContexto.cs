using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace WebApiPrueba.Data
{
    public class DBContexto: DbContext  
    {
        public DBContexto(DbContextOptions<DBContexto> options)
        {

        }
    }
}
