using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MysteryRider.Models.Database.Contexts;
using MysteryRider.Models.Database.Entities;

namespace MysteryRider.Controllers
{
    public class MR2_FORMSController : Controller
    {
        private OracleExampleContext db = new OracleExampleContext();

        // GET: MR2_FORMS
        public ActionResult Index()
        {
            return View(db.MR2_FORMS.ToList());
        }

        // GET: MR2_FORMS/Details/5
        public ActionResult Details(decimal id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MR2_FORMS mR2_FORMS = db.MR2_FORMS.Find(id);
            if (mR2_FORMS == null)
            {
                return HttpNotFound();
            }
            return View(mR2_FORMS);
        }

        // GET: MR2_FORMS/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: MR2_FORMS/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "MR2_FORMS_ID,FORM_TYPE,SAMPLE_NUMBER,SUBMIT_DATE,FORM_DATA,LUPDATE,LUPDATE_BY")] MR2_FORMS mR2_FORMS)
        {
            if (ModelState.IsValid)
            {
                db.MR2_FORMS.Add(mR2_FORMS);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(mR2_FORMS);
        }

        // GET: MR2_FORMS/Edit/5
        public ActionResult Edit(decimal id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MR2_FORMS mR2_FORMS = db.MR2_FORMS.Find(id);
            if (mR2_FORMS == null)
            {
                return HttpNotFound();
            }
            return View(mR2_FORMS);
        }

        // POST: MR2_FORMS/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "MR2_FORMS_ID,FORM_TYPE,SAMPLE_NUMBER,SUBMIT_DATE,FORM_DATA,LUPDATE,LUPDATE_BY")] MR2_FORMS mR2_FORMS)
        {
            if (ModelState.IsValid)
            {
                db.Entry(mR2_FORMS).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(mR2_FORMS);
        }

        // GET: MR2_FORMS/Delete/5
        public ActionResult Delete(decimal id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MR2_FORMS mR2_FORMS = db.MR2_FORMS.Find(id);
            if (mR2_FORMS == null)
            {
                return HttpNotFound();
            }
            return View(mR2_FORMS);
        }

        // POST: MR2_FORMS/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(decimal id)
        {
            MR2_FORMS mR2_FORMS = db.MR2_FORMS.Find(id);
            db.MR2_FORMS.Remove(mR2_FORMS);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
