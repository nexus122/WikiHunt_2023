export interface SearchResult {
    parse: Parse;
   }
   
   export interface Parse {
    links:  Link[];
    pageid: number;
    title:  string;
   }
   
   export interface Link {
    "*":     string;
    exists?: string;
    ns:      number;
   }
   