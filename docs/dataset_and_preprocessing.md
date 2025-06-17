# Dataset and preprocessing

To support our datastory with credible evidence, we used different sources to find relevant datasets that aligned with our topic, such as conservation databases, regional fisheries management databases, etc. We aimed to find data that was recent, diverse and comprehensive in scope in order to cover both aspects of the fishing industry and its documented impacts on whale populations.
We used datasets containing general information on different whale species, fishing industries, ship strikes and bycatch information and more.

## Cleaning

We cleaned datasets that contained diverse animal species (such as a dataset including species' populations trends and endangerment status) by filtering them to isolate whale species and exclude extraneous entries. We used ChatGPT to extract the relevant whale species' names from the set of animal species' names and then used Python and pandas to extract these from the datasets. 

Datasets that contained non-numeric values (for contintuous variables) or empty entries were cleaned by getting rid of these entries before aggregating.

## Variable descriptions

The variables we used can be grouped into multiple themes:

1. Time & Location
    - year (Numerical/Discrete): The year of the recorded data.
    - latitude (Numerical/Continuous): Geographic latitude of the fishing/whale event.
    - longitude (Numerical/Continuous): Geographic longitude of the fishing/whale event.
    - country (Categorical/Nominal): Country where the fishing/whale activity occurred.

2. Fishing (Capture Production)
    - total capture production (Numerical/Continuous): Total fish caught.
    - capture production (Numerical/Continuous): Fish caught in a specific context.

3. Whale-Specific Variables
    - species (Categorical/Nominal): Whale species involved.
    - amount of whale species (Numerical/Discrete): Number of distinct whale species.
    - endangerment classification (Categorical/Ordinal): Conservation status of whales.
    - total whale catches (Numerical/Discrete): Total whales captured.

4. Risk & Impact (Whales)
    - strike risk (Numerical/Continuous or Categorical): Likelihood of vessel strikes on whales.
    - mortality rate (Numerical/Continuous): Death rate of whales.
      
## Aggregations

For some datasets, aggregating was not necessary as they were usable in their original form. Other datasets existed of lots of tables which needed to be aggregated to be easier in use.
