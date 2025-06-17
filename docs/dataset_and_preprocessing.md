# Dataset and preprocessing

To support our datastory with credible evidence, we used different sources to find relevant datasets that aligned with our topic, such as conservation databases, regional fisheries management databases, etc. We aimed to find data that was recent, diverse and comprehensive in scope in order to cover both aspects of the fishing industry and its documented impacts on whale populations.

## Cleaning

We cleaned datasets that contained diverse animal species (such as a dataset including species' populations trends and endangerment status and a dataset on bycatch of different species) by filtering them to isolate whale species and exclude extraneous entries. We used ChatGPT to extract the relevant whale species' names from the set of animal species' names and then used Python and pandas to extract these from the datasets. 

## Variable descriptions

Variables we extracted from all of our datasets can be classified under multiple variable types and measurement scales:

- Nominal / Discrete: `Population Trend`, `Red List Category`, `Species (or group)`
- Continuous / Ratio: `Longitude`, `Latitude`, `Observed Mortality Rate (per set)`

Further explanation of variables:

- `Population Trend` (Unknown, Increasing, Stable, Decreasing): Shows recovery or decline of speies.
- `Red List Category` (Least Concern, Vulnerable, Endangered, Near Threatened, Data Deficient, Critically Endangered, Extinct, Extinct in the Wild): Shows the endangerment the whale species are currently experiencing.
- `Species (or group)`: Simply the species of the whales found to be affected by bycatch.
- `Longitude` & `Latitude`: The coordinates of where these whales were found to be affected by bycatch.
- `Observed Mortality Rate (per set)`: The known rate by which whales are killed because of bycatch.

## Aggregations

For some datasets, aggregating was not necessary as they were usable in their original form. 
