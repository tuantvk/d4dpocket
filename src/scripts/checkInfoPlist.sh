#!/bin/bash
# ===== iOS =====

read -r -p "Do you used Camera? (y/n) " r_camera
read -r -p "Do you used Photo Library? (y/n) " r_photo_library
read -r -p "Do you used Location Always And When In Use? (y/n) " r_location

infoPlist=`find "$(pwd)/ios/" -iname Info.plist`;

compare() {
	current=$(cat $infoPlist \
		| grep $1 \
		| head -1 \
		| sed 's/<\/\?[^>]\+>//g' )
	if [[ -n $current ]]; then
		if [ $1 = $current ]; then
			echo "\e[92m\u2714\e[0m "
		else
			echo "\e[91m\u274c\e[0m"
		fi
	else
		echo "\e[91m\u274c\e[0m"
	fi
}

# required
isAppleMusic=$(compare "NSAppleMusicUsageDescription")
isUserTracking=$(compare "NSUserTrackingUsageDescription")
printf "Results:
+----+----------------------------------------------+
| $isAppleMusic | NSAppleMusicUsageDescription
|---------------------------------------------------|
| $isUserTracking | NSUserTrackingUsageDescription
"

# options
if [[ $r_camera =~ ^[Yy]$ ]]; then
	printf "|---------------------------------------------------|\n"
	isCamera=$(compare "NSCameraUsageDescription")
	printf "| $isCamera | NSCameraUsageDescription \n"
fi
if [[ $r_photo_library =~ ^[Yy]$ ]]; then
	printf "|---------------------------------------------------|\n"
	isPhotoLibrary=$(compare "NSPhotoLibraryUsageDescription")
	printf "| $isPhotoLibrary | NSPhotoLibraryUsageDescription \n"
fi
if [[ $r_location =~ ^[Yy]$ ]]; then
	printf "|---------------------------------------------------|\n"
	isLAAWIU=$(compare "NSLocationAlwaysAndWhenInUseUsageDescription")
	printf "| $isLAAWIU | NSLocationAlwaysAndWhenInUseUsageDescription \n"
fi

printf "+----+----------------------------------------------+\n"
