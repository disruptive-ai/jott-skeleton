import { supabase } from "$lib/supabaseClient";

  export async function load({ params }) {
    const { data } = await supabase
      .from("blog_posts")
      .select()
      .eq("id", params.post_id)
      .single();

    return {
      singleBlogPost: data
    };
    
  }