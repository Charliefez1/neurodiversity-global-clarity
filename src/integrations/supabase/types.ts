export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      news_items: {
        Row: {
          created_at: string
          discovered_at: string
          id: string
          published_at: string | null
          source_domain: string | null
          source_name: string
          status: string
          summary: string | null
          title: string
          topic: string
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          discovered_at?: string
          id?: string
          published_at?: string | null
          source_domain?: string | null
          source_name: string
          status?: string
          summary?: string | null
          title: string
          topic?: string
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          discovered_at?: string
          id?: string
          published_at?: string | null
          source_domain?: string | null
          source_name?: string
          status?: string
          summary?: string | null
          title?: string
          topic?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      presentation_signups: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          name: string
          presentation: string
          use_context: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          name: string
          presentation?: string
          use_context?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          presentation?: string
          use_context?: string
        }
        Relationships: []
      }
      qa_feedback: {
        Row: {
          ai_query: string | null
          created_at: string
          helpful: boolean
          id: string
          qa_item_id: string | null
        }
        Insert: {
          ai_query?: string | null
          created_at?: string
          helpful: boolean
          id?: string
          qa_item_id?: string | null
        }
        Update: {
          ai_query?: string | null
          created_at?: string
          helpful?: boolean
          id?: string
          qa_item_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "qa_feedback_qa_item_id_fkey"
            columns: ["qa_item_id"]
            isOneToOne: false
            referencedRelation: "qa_items"
            referencedColumns: ["id"]
          },
        ]
      }
      qa_items: {
        Row: {
          answer: string
          created_at: string
          fts: unknown
          id: string
          published: boolean
          question: string
          slug: string | null
          tags: string[] | null
          updated_at: string
          view_count: number
        }
        Insert: {
          answer: string
          created_at?: string
          fts?: unknown
          id?: string
          published?: boolean
          question: string
          slug?: string | null
          tags?: string[] | null
          updated_at?: string
          view_count?: number
        }
        Update: {
          answer?: string
          created_at?: string
          fts?: unknown
          id?: string
          published?: boolean
          question?: string
          slug?: string | null
          tags?: string[] | null
          updated_at?: string
          view_count?: number
        }
        Relationships: []
      }
      qa_query_log: {
        Row: {
          created_at: string
          id: string
          query: string
        }
        Insert: {
          created_at?: string
          id?: string
          query: string
        }
        Update: {
          created_at?: string
          id?: string
          query?: string
        }
        Relationships: []
      }
      qa_submissions: {
        Row: {
          admin_notes: string | null
          created_at: string
          email: string | null
          id: string
          question: string
          status: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          email?: string | null
          id?: string
          question: string
          status?: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          email?: string | null
          id?: string
          question?: string
          status?: string
        }
        Relationships: []
      }
      user_feedback: {
        Row: {
          admin_response: string | null
          created_at: string
          feedback: string
          feedback_type: string
          id: string
          name: string | null
          status: string
        }
        Insert: {
          admin_response?: string | null
          created_at?: string
          feedback: string
          feedback_type?: string
          id?: string
          name?: string | null
          status?: string
        }
        Update: {
          admin_response?: string | null
          created_at?: string
          feedback?: string
          feedback_type?: string
          id?: string
          name?: string | null
          status?: string
        }
        Relationships: []
      }
      user_questions: {
        Row: {
          answer: string | null
          created_at: string
          id: string
          page_submitted_from: string | null
          question: string
          status: string
        }
        Insert: {
          answer?: string | null
          created_at?: string
          id?: string
          page_submitted_from?: string | null
          question: string
          status?: string
        }
        Update: {
          answer?: string | null
          created_at?: string
          id?: string
          page_submitted_from?: string | null
          question?: string
          status?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
