<?php

echo "<!DOCTYPE html>\n";
echo "<html>\n";
echo "  <title>Build a Homepage!</title>\n";
echo "  <link rel=\"stylesheet\" href=\"/css.css\" />\n";
echo "  <center>\n";
echo "  <h1>\n";
echo "    Build a Homepage!\n";
echo "  </h1>\n";
echo "  <br />\n";
echo "  <h2>\n";
echo "    Get Started:\n";
echo "  </h2>\n";
echo "  <form action=\"/apps/buildahomepage/page.php\" method=\"GET\">\n";
echo "    Your Website URL: <input type=\"text\" name=\"link\" /><br />\n";
echo "    Your Name/Company: <input type=\"text\" name=\"title\" /><br />\n";
echo "    Tagline (Optional): <input type=\"text\" name=\"line\" /><br />\n";
echo "    Description: <input type=\"text\" name=\"about\" /><br />\n";
echo "\n";
echo "    <input type=\"submit\" />\n";
echo "  </form>\n";
echo "</center>\n";
echo "</html>\n";

?>
