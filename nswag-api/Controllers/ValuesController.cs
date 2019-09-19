using Microsoft.AspNetCore.Mvc;


namespace nswag_ts_client.Controllers
{
    public class MyDto
    {
        public string Name { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<MyDto> GetMtDto()
        {
            return new MyDto { Name = "hello" };
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
        }


        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
