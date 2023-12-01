         +-------------------+
         |      App State     |
         +-------------------+
         | selectedBeast:    |  <--- State managed by App component
         |   - imageUrl      |
         |   - title         |
         |   - description   |
         |   - keyword       |
         |   - horns         |
         +-------------------+
                  |
                  | Passes down as props
                  |
         +-------------------+             +-------------------+
         |    Gallery Props   | ----------> | SelectedBeastProps |
         +-------------------+             +-------------------+
         | setSelectedBeast  |             | setSelectedBeast  |  <--- Prop passed down to components
         | filterValue       |             | beast             |
         +-------------------+             +-------------------+

      

### State Management:

#### App Component (`App.jsx`):
- Manages the `selectedBeast` state using the `useState` hook. This state keeps track of the currently selected beast.
- Manages the `filterValue` state using the `useState` hook. This state holds the value used to filter the beasts.

#### Gallery Component (`Gallery.jsx`):
- Defines its own local `selectedBeast` state using the `useState` hook. This state manages the selected beast within the scope of the `Gallery` component.

#### SelectedBeast Component (`SelectedBeast.jsx`):
- Uses the `showModal` state, managed by the `useState` hook. This state controls the visibility of the modal based on the presence of the selected beast.

### Props Passing:

#### App Component (`App.jsx`):
- Passes down the `setSelectedBeast` function as a prop to the `Gallery` component.
- Conditionally renders the `SelectedBeast` component and passes the selected beast and `setSelectedBeast` function as props.

#### Gallery Component (`Gallery.jsx`):
- Receives `setSelectedBeast` and `filterValue` as props from the `App` component.
- Passes down `setSelectedBeast` to each `HornedBeast` component.

#### HornedBeast Component (`HornedBeast.jsx`):
- Receives `setSelectedBeast` as a prop from the `Gallery` component.
- Calls `setSelectedBeast` when a specific beast is clicked to update the `selectedBeast` state in the `Gallery` or `App` component.

#### SelectedBeast Component (`SelectedBeast.jsx`):
- Receives the selected beast and `setSelectedBeast` as props from the `App` component.
- Manages the visibility of the modal using its local state and controls the closing behavior based on the `setSelectedBeast` prop.

### Prop and State Flow:

- The `App` component manages the overall state of the selected beast and the filter value.
- The `Gallery` component handles its local selected beast state and displays a grid of beasts based on the filter value received as a prop.
- The `SelectedBeast` component manages the visibility of the modal and controls its behavior when closing.

Overall, the props are passed down from higher-level components to lower-level ones, allowing the sharing of data and functions across the application to manage state and control behavior. The state is managed either locally within components or at higher levels and is updated using React's state management capabilities, ensuring a unidirectional flow of data.