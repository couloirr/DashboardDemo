import { createClient } from '@supabase/supabase-js';

const projectURL = process.env.REACT_APP_SUPABASE_URL;
const projectKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(projectURL, projectKey);

export default supabase;