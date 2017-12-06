add classpath 'com.google.gms:google-services:3.1.0' to build.graddle of your project/platform/android:

        buildscript {
            repositories {
                jcenter()
            }

        	dependencies {
        		classpath "com.android.tools.build:gradle:2.2.3"
                classpath 'com.google.gms:google-services:3.1.0'
        	}
        }


copy the google-services.json to your your project/platform/android folder
