# Datasets and preprocessing

We used different sources to find relevant datasets that aligned with our topic, such as conservation databases, regional fisheries management databases, etc. We aimed to find data that was recent, diverse and comprehensive in scope in order to cover both aspects of the fishing industry and its documented impacts on whale populations.

<i> Dataset sources can be found on the [Sources](sources.md) page. </i>

## Cleaning and preparing data

All datasets were cleaned and prepared using Python and the pandas library. Non-numeric values in continuous variables and empty entries were removed to ensure consistency. Irrelevant variables were also excluded.

In some cases, multiple datasets were merged to create a more comprehensive dataset. Additionally, certain datasets required aggregation before use; for instance, country-level figures were sometimes collapsed into global totals.

## Variable descriptions

The variables we used can be grouped into multiple themes:

1. Time & Location
   - year (Discrete): Year of data
   - latitude, longitude (Continuous): Geographic coordinates
   - country (Nominal): Country of record

2. Fishing Industry
   - total capture production, capture production (Continuous): Fish catch totals
   - fishing revenue (Continuous): Income from commercial fishing
   - gdp (Continuous): National economic output
   - percentage of global protein, total consumption (Continuous): Role of fish in diet

3. Whale-Specific
   - amount of whale species (Discrete): Number of whale species
   - endangerment classification (Ordinal): Conservation status

4. Risk & Impact (Whales)
   - strike risk, risk index (Continuous): Threat levels to whales
   - total whale catches (Discrete): Number of whales caught
