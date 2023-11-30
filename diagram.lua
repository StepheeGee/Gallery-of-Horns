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
