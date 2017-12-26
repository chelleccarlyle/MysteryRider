using MysteryRider.Models.Database.Contexts;
using MysteryRider.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MysteryRider.Controllers
{
    public class FormDataController : Controller
    {

        OracleExampleContext _db = new OracleExampleContext();

        //// GET: FormData
        //public ActionResult Index([Bind(Prefix ="id")]int formId)
        //{
        //    return View();
        //}

        // GET: FormData/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: FormData/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: FormData/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: FormData/Edit/5
        public ActionResult Edit(int id)
        {
            var form = _db.MR2_FORMS.Find(id);

            if (form != null)
            {

                //Get form data from form and convert to object
                var data = FormData.FromJson(form.FORM_DATA);

                //Create form data view model and pass it into view
                var model = new FormDataViewModel(data, id);

                return View(model);
            }
            return HttpNotFound();
        }

        // POST: FormData/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, string action, string data)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: FormData/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: FormData/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        protected override void Dispose(bool disposing)
        {
            _db.Dispose();
            base.Dispose(disposing);
        }
    }
}
