using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace MysteryRider.Models
{
    public class FormDataViewModel
    {
        public FormData FORM_DATA { get; set; }
        public decimal MR2_FORMS_ID { get; set; }

        //Constructor
        public FormDataViewModel(FormData data, decimal id)
        {
            FORM_DATA = data;
            MR2_FORMS_ID = id;
        }
    }
}