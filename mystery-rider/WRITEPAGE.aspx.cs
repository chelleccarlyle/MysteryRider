using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MGPS.workingFiles
{
    public partial class WRITEPAGE : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            DataSet ds = new DataSet();
            Standard_module sm = new Standard_module();

            String sql = "SELECT * FROM MR2_CHOICES";
            sm.oracleFillDataSet(ref ds, sql, "section");
            sm.oracleFillDataSet(ref ds, sql, "subsection");
            sm.oracleFillDataSet(ref ds, sql, "choices");

            // setup relations in the data set
            // example
            //ds.Relations.Add()
            // Write the string to a file.
            System.IO.StreamWriter file = new System.IO.StreamWriter("c:\\test.txt");
          
            // find out how to write to a file
            // Compose a string that consists of three lines.
            string lines = "First line.\r\nSecond line.\r\nThird line.";

          

            foreach (DataRow dr in ds.Tables["sections"].Rows)
            {
                String example = "my text is {0} {1}";
                example = String.Format(example, "My Text","second Text");

                // some logic to break questions into sections
                String line = "<select id='{0}' class='input-group'>";
                line = String.Format(line, (string)dr["fieldname"]);
                // some logic to break choices into groups of question
                foreach (DataRow drSection in ds.Tables["choices"].Rows)
                {
                    String choice = "<option id={0} value={1}>{2}</option>";
                    choice = String.Format(choice,"??","??","??");

                }

                line += "</select>";
                file.WriteLine(lines);

               

            }
 file.Close();
        }
    }
}