import { supabase } from '$lib/supabaseClient';

export const insertPost = async (post) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post);
  
    if (error) {
      console.error(error);
      throw error;
    }
  
    return data;
  };
  