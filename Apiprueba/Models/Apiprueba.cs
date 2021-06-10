using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Apiprueba.Models
{
    public class Apiprueba
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Servidor { get; set; }
}
}
