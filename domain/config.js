import {build_config_from_defaults} from "../lib/config";

const defaults = {
    start_year: 1999,
    end_year: new Date().getFullYear() - 1,
    year_count: 3,
    article_count: 4,
    year_sort: 'No',
    display_location: 'Below current news',
}

export const { get, set, get_default } = build_config_from_defaults(defaults)
