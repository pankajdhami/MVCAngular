using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCAngular.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult GetListItems()
        {
            var json = new[] { 
                new { text="Mobile",value=0,value2=2,value3=3 },
                new { text="Tv",value=2,value2=0,value3=6 },
                new { text="Laptop",value=3,value2=6,value3=0 },
                new { text="Bag",value=4,value2=8,value3=12 }
            };

            return Json(json, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}