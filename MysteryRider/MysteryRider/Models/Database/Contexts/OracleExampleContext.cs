namespace MysteryRider.Models.Database.Contexts
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using MysteryRider.Models.Database.Entities;

    public partial class OracleExampleContext : DbContext
    {
        public OracleExampleContext()
            : base("name=OracleExampleContext")
        {
        }

        public virtual DbSet<MR2_FORMS> MR2_FORMS { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MR2_FORMS>()
                .Property(e => e.MR2_FORMS_ID)
                .HasPrecision(38, 0);

            modelBuilder.Entity<MR2_FORMS>()
                .Property(e => e.FORM_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MR2_FORMS>()
                .Property(e => e.SAMPLE_NUMBER)
                .IsUnicode(false);

            modelBuilder.Entity<MR2_FORMS>()
                .Property(e => e.FORM_DATA)
                .IsUnicode(false);

            modelBuilder.Entity<MR2_FORMS>()
                .Property(e => e.LUPDATE_BY)
                .IsUnicode(false);
        }
    }
}
