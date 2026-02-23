# Proper React Native Naming Conventions
### Out of curiousity, I did some research on proper naming conventions for React Native / TypeScript files. I thought the results were pretty cool, and I've been trying to follow them myself! 

## Routing
All routing files (i.e. `index.tsx`, `create.tsx`, `library.tsx`) use kebab-case. Expo looks specifically for the lowercase file names when routing.
## Components
All component files (i.e. `CategoryCard.tsx`, `DiscoverCard.tsx`) use TitleCase. Proper naming convention states that the file name should match the component name.
## Layouts
All layout files (i.e. `_layout.tsx`) start with an underscore. These files start with an underscore to signify they are partial layouts that wrap child routes rather than being independent, URL-addressable pages.
## Data
All data files (i.e. `searchData.ts`) use camelCase. These files also do not use any JavaScript; they only use TypeScript. As such, the file extension is only `.ts` for these files.

# Directory Structure
### Outline of the directory structure thus far. Use this as a reference when determining where your files should live. Feel free to ask questions if necessary. If you feel like anything should change and would like to suggest an improvement, please do! This structure is not what we have to finish the project with, it is merely what has worked best for me so far.

## /app
### /components - A Folder to Store all Component Files
#### /home-screen - A Folder to Store all Components to be Rendered on the Home Screen
#### /library-screen - A Folder to Store all Components to be Rendered on the Library Screen
#### /search-screen - A Folder to Store all Components to be Rendered on the Search Screen
- `CategoryCard.tsx`
- `DiscoverCard.tsx`
- `SearchBar.tsx`
- `SearchHeader.tsx`
### /data - A Folder to Store all Data Files
I determined this folder was necessary after creating the arrays necessary for the Search Screen. After creating all of these arrays, my search.tsx file was incredibly long, and I found it inconvenient to work with. So, as they would do in industry, I created a /data file for us all to use. If you are working with a bunch of arrays, feel free to store your files here!
- `searchData.ts`
### /tabs
- `_layout.tsx`
- `create.tsx`
- `index.tsx`
- `library.tsx`
- `searchh.tsx`