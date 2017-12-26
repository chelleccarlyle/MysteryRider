using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MysteryRider.Models.Database.Entities;
using Newtonsoft.Json;

namespace MysteryRider.Controllers
{
    public class HomeController : Controller
    {
        //Starting page where user selects categories for form
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult SurveyFilled(string action, string data)
        {

            switch (action)
            {
                case "saveData":
                    //Store json in MR2_FORMS table of MR_SURVEY database
                    using (var db = new MysteryRider.Models.Database.Contexts.OracleExampleContext())
                    {

                        dynamic json = JsonConvert.DeserializeObject(data);

                        string sample_num = json.q1_02_input;
                        string surveyor_id = json.q1_01_input;

                        MR2_FORMS form = new MR2_FORMS();
                        form.FORM_TYPE = "TEST";
                        form.SAMPLE_NUMBER = sample_num;
                        form.LUPDATE_BY = surveyor_id;
                        form.FORM_DATA = data;
                        form.SUBMIT_DATE = DateTime.Now;
                        db.MR2_FORMS.Add(form);
                        db.SaveChanges();

                        

                    }
                    break;
                default: 
                    break;
            }

            //Success - redirect to form submit page
            return Content(Url.Action("FormSubmit"));
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
       
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        //
        // GET: /Reviews/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Home/MrForm

        public ActionResult MrForm()
        {
            return View();
        }

        public ActionResult FormSubmit()
        {
            return View();
        }

        //
        // POST: /Home/MrForm

        [HttpPost]
        public ActionResult MrForm(FormCollection collection)
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

        ////
        //// GET: /Reviews/Edit/5

        //public ActionResult Edit(int id)
        //{
        //    var review = _reviews.Single(r => r.Id == id);

        //    return View(review);
        //}

        ////
        //// POST: /Reviews/Edit/5

        //[HttpPost]
        //public ActionResult Edit(int id, FormCollection collection)
        //{
        //    var review = _reviews.Single(r => r.Id == id);
        //    if (TryUpdateModel(review))
        //    {
        //        // .. 
        //        return RedirectToAction("Index");
        //    }
        //    return View(review);
        //}

        //
        // GET: /Reviews/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Reviews/Delete/5

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



    }
}