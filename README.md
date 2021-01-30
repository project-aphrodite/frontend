# dreamlix

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Recommended workflow for components
Storybook allows you to develop Vue components (and composite compenents) in isolation from any integration. I propose the following workflow when designing and implementing a new component:
    
1. Create a new storybook entry for the component
2. Define what the new component is meant to do
3. Create the component (shellcode) and include it in the new story
4. Implement the code
5. Using the Storybook Prop feature, the new component's props and events will be listed in the story's `Doc` tab

## Recommended workflow for a new client/product
To make components reusable per client there are two avenues one could follow. 
1. Publish all the components to npm/private npm repo which you could then install via NPM install per client repo
2. Have a mono repo with a master branch and client branches. All changes made to components need to be merged into master and changes made to client branches should stay out of the master branch.

Option 2 seems better. This is just an opinion.

## Recommended VS Code extensions
- ESLint
- Prettier - Code formatter
- vscode-icons
- Vue VSCode Snippets
