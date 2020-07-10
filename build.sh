#!/usr/bin/env bash
set -euo pipefail
# -e: immediately exit if any command has a non-zero exit status
# -u: a reference to any variable that isn't previously defined (with the exceptions of $* and $@) is an error
# -o: prevents errors in a pipeline from being masked

usage() {
	echo " " 1>&2
	echo "Usage: $0" 1>&2
	echo "    -t <Version>   Tag e.g. latest (default) or 4.0.3 (can specify multiple)" 1>&2
	echo "    -h             Show this help" 1>&2
	echo " " 1>&2
	echo "    Example:" 1>&2
	echo "        $ $0 -t latest -t 4.0 -t 4.0.3" 1>&2
	echo "        (Builds the current source and tags with 'latest')" 1>&2
	echo " " 1>&2
	echo "    Default:" 1>&2
	echo "        $ $0" 1>&2
	echo "      is equivalent to" 1>&2
	echo "        $ $0 -t latest" 1>&2
	echo " " 1>&2

	exit 1
}

declare -a tagList

# Initialize parameters specified from command line
while getopts ":t:k:ph" arg; do
	case "${arg}" in
		t)
			tagList+=(${OPTARG})
			;;
		h)
			usage
			exit 0
			;;
		*)
			usage
			exit 1
			;;
		esac
done
shift $((OPTIND-1))

gitRepoName=$(git remote get-url origin)
repoName="amazing-product/$(basename ${gitRepoName} .git)"

logSection() {
	echo " "
	echo "######"
	echo "##"
	echo "##  ${repoName}: $1"
	echo "##"
	echo "##############"
}

logSection "Verifying SSH file exists"


logSection "Extracting tags"

if [[ ${#tagList[@]} -eq 0 ]]; then
	echo "Defaulting to 'latest'"
	tagList+=(latest)
fi
echo "Build tags: $(echo ${tagList[*]} | sed 's; ;, ;g')"

logSection "Starting docker build"
tagsArgs=""
for tag in "${tagList[@]}"; do
	tagsArgs+="--tag ${repoName}:${tag} "
done
tagsArgs=$(echo ${tagsArgs} | sed 's; *$;;')
echo "Running: 'docker build ${tagsArgs} .'"
echo " "
docker build ${tagsArgs} .

logSection "Build complete"

#docker run command
#docker run -it -p 3000:3000  --rm amazing-product/sas:test