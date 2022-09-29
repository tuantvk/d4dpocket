#!/bin/bash
# ===== iOS =====

missing="\e[91m\u274c\e[0m"
check="\e[92m\u2714\e[0m"

InfoPlist=`find "$(pwd)/ios/" -iname Info.plist`;

# required
AppleMusic="NSAppleMusicUsageDescription"
UserTracking="NSUserTrackingUsageDescription"

# options
Camera="NSCameraUsageDescription"
LAAWIU="NSLocationAlwaysAndWhenInUseUsageDescription"
LocationAlways="NSLocationAlwaysUsageDescription"
LocationWhenInUse="NSLocationWhenInUseUsageDescription"
PhotoLibrary="NSPhotoLibraryUsageDescription"

read -r -p "Do you used Camera? (y/n) " r_camera
read -r -p "Do you used Photo Library? (y/n) " r_photo_library
read -r -p "Do you used Location Always And When In Use? (y/n) " r_location

CurrentAppleMusic=$(cat $InfoPlist \
  | grep $AppleMusic \
  | head -1 \
	| sed 's/<\/\?[^>]\+>//g' )
CurrentUserTracking=$(cat $InfoPlist \
  | grep $UserTracking \
  | head -1 \
	| sed 's/<\/\?[^>]\+>//g' )
IsAppleMusic=$missing
IsUserTracking=$missing
[[ $AppleMusic == $CurrentAppleMusic ]] && IsAppleMusic=$check;
[[ $UserTracking == $CurrentUserTracking ]] && IsUserTracking=$check;

printf "Results:
+----+----------------------------------------------+
| $IsAppleMusic | $AppleMusic
|---------------------------------------------------|
| $IsUserTracking | $UserTracking
"

if [[ $r_camera =~ ^[Yy]$ ]]; then
	CurrentCamera=$(cat $InfoPlist \
		| grep $Camera \
		| head -1 \
		| sed 's/<\/\?[^>]\+>//g' )
	printf "|---------------------------------------------------|\n"
	[[ $Camera == $CurrentCamera ]] && IsCamera=$check || IsCamera=$missing
	printf "| $IsCamera | $Camera \n"
fi
if [[ $r_photo_library =~ ^[Yy]$ ]]; then
	CurrentPhotoLibrary=$(cat $InfoPlist \
		| grep $PhotoLibrary \
		| head -1 \
		| sed 's/<\/\?[^>]\+>//g' )
	printf "|---------------------------------------------------|\n"
	[[ $PhotoLibrary == $CurrentPhotoLibrary ]] && IsPhotoLibrary=$check || IsPhotoLibrary=$missing
	printf "| $IsPhotoLibrary | $PhotoLibrary \n"
fi
if [[ $r_location =~ ^[Yy]$ ]]; then
	CurrentLAAWIU=$(cat $InfoPlist \
		| grep $LAAWIU \
		| head -1 \
		| sed 's/<\/\?[^>]\+>//g' )
	printf "|---------------------------------------------------|\n"
	[[ $LAAWIU == $CurrentLAAWIU ]] && IsLAAWIU=$check || IsLAAWIU=$missing
	printf "| $IsLAAWIU | $LAAWIU \n"
fi

printf "+----+----------------------------------------------+\n"
