﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Formato_CreacionClientes.Controllers
{
    public class ClientesController : Controller
    {
        // GET: ClientesController1
        public ActionResult Index()
        {
            return View();
        }

        // GET: ClientesController1/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ClientesController1/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ClientesController1/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ClientesController1/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ClientesController1/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ClientesController1/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ClientesController1/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
