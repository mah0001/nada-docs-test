============
Upgrade from NADA 4.2 to 4.3
============

NADA 4.3 provides bug fixes and a new theme. For an upgrade from version 4.2 to 4.3 there are no database schema changes.

To upgrade an instance of NADA 4.2, follow the steps:

1) Backup your existing NADA website.
2) Download NADA 4.3 from IHSN from here: http://ihsn.org/home/software/nada
3) Unzip the NADA 4.3 to a temporary folder on your web server. e.g. nada_43_temp



Updating the Site theme/template
--------------------------------

You cannot use your NADA3 template in NADA4 without making some changes. Here are general guidelines but steps may differ depending on your nada site template.

*	Copy your NADA3 template to the NADA4 themes folder.

*	Edit the [nada4-root]/config/template.php following the steps below:

*	Look for the setting “theme_name”, by default it is set to ”wb”:

*	 Change “wb” to the theme name you want to use. Theme name is the folder name you copied to [NADA4]/themes/[your-site-theme] from your nada3 site.

*	Save the file.

	NB: The template may need some adjusting to run properly on the new NADA 4 site. This will involve editing the layout.php and other template files within the template folder which is now located in the NADA 4 themes folder.
