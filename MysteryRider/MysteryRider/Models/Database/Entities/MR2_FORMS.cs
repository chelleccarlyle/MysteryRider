namespace MysteryRider.Models.Database.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("MR_SURVEY.MR2_FORMS")]
    public partial class MR2_FORMS
    {
        [Key]
        public decimal MR2_FORMS_ID { get; set; }

        [StringLength(20)]
        public string FORM_TYPE { get; set; }

        [StringLength(20)]
        public string SAMPLE_NUMBER { get; set; }

        public DateTime? SUBMIT_DATE { get; set; }

        public string FORM_DATA { get; set; }

        public DateTime? LUPDATE { get; set; }

        [StringLength(20)]
        public string LUPDATE_BY { get; set; }
    }
}
