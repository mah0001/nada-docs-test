============
Upgrade from NADA 3
============

For users with an existing NADA 3.x catalog an upgrade script is included that will update your NADA 3.x database to NADA 4.x. The process involves modifying your NADA 3.x database and thus carries some risks. The script will add new tables to the NADA 3.x database. All user accounts and survey information will be retained by the upgrade.

.. important::
	Backup the NADA 3.x database before doing anything!!

1. Follow the instructions on page 4 and set up a folder in the web root containing the NADA 4 files.

2. Edit the database.php file as instructed in the section above: NADA database configurations for MySQL.

3. Instead of entering a new database name, user account name and password -fill in the details of the existing NADA 3.x database. 

.. note::
	
	These can be found by looking at the existing NADA 3.x database.php file and entering the settings into the NADA 4 database.php file.
	
.. image:: images/database-connection.png

4. Save the file.

5. Navigate to the URL for the NADA4 site: Example: http://your-nada-site/nada4/index.php/nada4_upgrade

6. The following page loads:

.. image:: images/upgrade-database.png

Take note of the warnings and make any necessary corrections before
clicking the “Upgrade database to NADA 4” button.

.. warning:: This step makes changes to your nada 3 database that are not undo-able so make sure you do make a database backup before this step.

Click on the “Upgrade database to NADA 4” button and wait for the page to
reload. The output of the page will look something like below:

The script will print number of messages about failed table updates. This does
not mean the script failed to upgrade. It just means some of the updates were
not needed on your version of NADA 3. Different versions of NADA have
different numbers of fields in the database and the upgrade script tries to fix
the missing fields for all these different versions of NADA. If the existing
NADA 3 database already has that field then it reports it as an error.

You can ignore the error messages that include the wording “Duplicate
column name” or “Duplicate entry”.

Now your database has been migrated to NADA version 4.1. We will have to run one more upgrade script to for NADA version 4.2

7. Navigate to the URL for the NADA4.2 site: Example: http://your-nada-site/nada42/index.php/nada42_upgrade

.. warning:: This step makes changes to your nada 4.1 database that are not undo-able. This page will not show any message on the screen. You will be getting blank page. Please do not repeat the process

8. To verify the database upgrade. Open the NADA catalog page by going to
http://[your-nada4-site]/index.php/catalog page and verify all studies from
NADA 3 are listed.

Linking your NADA 3 data files to NADA 4
-----------------------------------------

The upgrade script has only upgraded the database. It is now necessary to tell the NADA4 where to locate the datafiles that were uploaded to the original NADA 3 site.

**There are two options available:**

**Option 1:** Copy the datafiles folder from NADA 3 to NADA 4. This works best if you have only a few studies and the datafiles folder size is small enoughto be moved easily from one location to another.

**Option 2:** If it is not possible to easily move the datafiles folder from NADA 3 to NADA 4, you can tell NADA 4 the location of the datafiles without moving the files. Here are the steps:

* Use your NADA 3 administrator login credentials to login to your new NADA 4 site.

* Click on Site administration in the top right corner of the screen.

* Go to the “Settings” menu and click on the “Settings” sub-menu.

.. image:: images/settings-menu.png

* Under Site configurations, expand the “Survey Catalog Settings” section

.. image:: images/survey-catalog-settings.png

* For the setting “Catalog folder”, enter the relative or full path to where the NADA 3 datafiles folder is located. For example, if the nada3 datafiles are located on c:/nada3/datafiles, enter that path here.

* Save the configurations by clicking on the update button. If now errors are shown then you have successfully updated the folder path.

* Check your new NADA 4 site to make sure the migration was successful

  - Check the user administration page from site administration to make sure the users from the nada3 site were migrated.

  - Check the “Data Catalog” page and view the studies by clicking on the study title to make sure the study information pages are correct.

  - Check the site menus are the same as the NADA 3 site.
Refresh DDI
----------------
In NADA 4, more information is stored in the database from the DDI than in the NADA 3. To bring all these new fields into the imported studies it is necessary to refresh the DDI’s. The refresh DDI feature in NADA updates the database with metadata from the DDI without having re-uploading the DDIs. 
To update the metadata for all studies in your catalog:

*	Open the following NADA 4 URL in your browser: 

http://[your-nada-4-site]/index.php/admin/catalog/batch_refresh

*	Select all studies

*	Click on the “Refresh DDI” button

Transferring ownership
----------------

NADA 4 has a collection management feature. When studies are imported from the NADA3 catalog into NADA4 they are put into a collection called DEFAULT. They need to be moved from this default system collection to the Central Data Catalog of the NADA4.

**To do this:**

*	Go login to the Site Administration and navigate to the Studies, Manage Studies, Central Data Catalog page

.. image:: images/manage-studies.png

*	Select all the studies by ticking the check boxes next to each study on the right.

*	Click on the dropdown menu and select Transfer owner

.. image:: images/transfer-study.png
 
*	From the Transfer study owner page: Select Central Data Catalog and then click transfer.

.. image:: images/select-collection.png 

Updating the Site theme/template
--------------------------------

You cannot use your NADA3 template in NADA4 without making some changes. Here are general guidelines but steps may differ depending on your nada site template.

*	Copy your NADA3 template to the NADA4 themes folder.

*	Edit the [nada4-root]/config/template.php following the steps below:

*	Look for the setting “theme_name”, by default it is set to ”wb”:

*	 Change “wb” to the theme name you want to use. Theme name is the folder name you copied to [NADA4]/themes/[your-site-theme] from your nada3 site.

*	Save the file.

	NB: The template may need some adjusting to run properly on the new NADA 4 site. This will involve editing the layout.php and other template files within the template folder which is now located in the NADA 4 themes folder.
